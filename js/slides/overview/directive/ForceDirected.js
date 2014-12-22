/**
 *  Defines the ForceDirected controller
 *
 *  @author  Howard.Zuo
 *  @date    Dec 22th, 2014
 *
 */
(function (define) {
    'use strict';

    /**
     * Register the ForceDirected class with RequireJS
     */
    define(['d3', 'lodash'], function (d3, _) {

        var length = function (str) {
            return _.reduce(str, function (sum, c, i) {
                return sum + (str.charCodeAt(i) > 255 ? 20 : 13);
            }, 0);
        };

        var ForceDirected = function () {
            return {
                restrict: 'A',
                scope: {
                    data: '='
                },
                link: function ($scope, element, attrs) {

                    var width, height;
                    var color = d3.scale.category20();
                    var force;


                    var paint = function (originalNodes) {
                        width = element.width();
                        height = element.height();

                        var nodes = _.map(originalNodes, function (v) {
                            return {
                                name: v,
                                radius: length(v) / 2
                            };
                        });
                        nodes.unshift({
                            name: '',
                            radius: 1
                        });
                        d3.select(element[0])
                            .selectAll('svg')
                            .remove();

                        force = d3.layout.force()
                            .gravity(0.03)
                            .charge(function (d, i) {
                                return i ? 0 : -1300;
                            })
                            .nodes(nodes)
                            .size([width, height]);

                        var root = nodes[0];
                        root.radius = 0;
                        root.fixed = true;

                        force.start();

                        var svg = d3.select(element[0])
                            .append('svg:svg')
                            .attr('width', width)
                            .attr('height', height);

                        var g = svg.selectAll('g')
                            .data(nodes.slice(1))
                            .enter()
                            .append('g');

                        g.append('circle')
                            .attr('r', function (d) {
                                return d.radius;
                            })
                            .style('fill', function (d, i) {
                                return color(i % 3);
                            });

                        g.append('text')
                            .text(function (d) {
                                return d.name;
                            })
                            .style('display', function (d) {
                                // return (this.getComputedTextLength() > 2 * d.radius) ? 'none' : 'block';
                                return 'block';
                            })
                            .style('font-family', '"Helvetica Neue",Helvetica,Arial,sans-serif')
                            .attr({
                                'alignment-baseline': 'middle',
                                'text-anchor': 'middle'
                            });

                        force.on('tick', function (e) {
                            var q = d3.geom.quadtree(nodes),
                                i = 0,
                                n = nodes.length;

                            while (++i < n) {
                                q.visit(collide(nodes[i]));
                            }

                            g.attr('transform', function (d) {
                                return 'translate(' + d.x + ', ' + d.y + ')';
                            });
                        });

                        svg.on('mousemove', function () {
                            var p1 = d3.mouse(this);
                            root.px = p1[0];
                            root.py = p1[1];
                            force.resume();
                        });
                    };

                    function collide(node) {
                        var r = node.radius + 16,
                            nx1 = node.x - r,
                            nx2 = node.x + r,
                            ny1 = node.y - r,
                            ny2 = node.y + r;
                        return function (quad, x1, y1, x2, y2) {
                            if (quad.point && (quad.point !== node)) {
                                var x = node.x - quad.point.x,
                                    y = node.y - quad.point.y,
                                    l = Math.sqrt(x * x + y * y),
                                    r = node.radius + quad.point.radius;
                                if (l < r) {
                                    l = (l - r) / l * .5;
                                    node.x -= x *= l;
                                    node.y -= y *= l;
                                    quad.point.x += x;
                                    quad.point.y += y;
                                }
                            }
                            return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
                        };
                    }


                    $scope.$watch('data', function (newValue) {
                        if (newValue) {
                            paint(newValue);
                        }
                    }, true);

                    $scope.$on('$destory', function (newValue) {
                        d3.select(element[0])
                            .selectAll('svg')
                            .remove();
                    }, true);

                }
            };
        };

        return [ForceDirected];
    });


})(define);