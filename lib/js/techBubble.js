(function(win, doc, d3) {
    'use strict';

    var TECH = {};

    var length = function(str) {
        return str.length * 8 + 10;
    };

    TECH.draw = function(width, height) {
        var color = d3.scale.category20();
        var force;
        var element = doc.querySelector('#technologies-chart');


        var paint = function(originalNodes) {

            var nodes = originalNodes.map(function(v) {
                return {name: v, radius: length(v) / 2};
            });
            nodes.unshift({name: '', radius: 1});
            d3.select(element)
                .selectAll('svg')
                .remove();

            force = d3.layout.force()
                .gravity(0.03)
                .charge(function(d, i) {
                    return i ? 0 : -1000;
                })
                .nodes(nodes)
                .size([width, height]);

            var root = nodes[0];
            root.radius = 0;
            root.fixed = true;

            force.start();

            var svg = d3.select(element)
                .append('svg:svg')
                .attr('width', width)
                .attr('height', height);

            var g = svg.selectAll('g')
                .data(nodes.slice(1))
                .enter()
                .append('g');

            g.append('circle')
                .attr('r', function(d) {
                    return d.radius;
                })
                .style('fill', function(d, i) {
                    return color(Math.random() * i);
                });

            g.append('text')
                .text(function(d) {
                    return d.name;
                })
                .style('display', function(d) {
                    return 'block';
                })
                .style('font-size', '14px')
                .attr({
                    'alignment-baseline': 'middle',
                    'text-anchor': 'middle'
                });

            force.on('tick', function(e) {
                var q = d3.geom.quadtree(nodes),
                    i = 0,
                    n = nodes.length;

                while (++i < n) {
                    q.visit(collide(nodes[i]));
                }

                g.attr('transform', function(d) {
                    return 'translate(' + d.x + ', ' + d.y + ')';
                });
            });

            svg.on('mousemove', function() {
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
            return function(quad, x1, y1, x2, y2) {
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

        d3.json('lib/data/technologies.json', function(json) {
            paint(json);
        });
    };

    TECH.destroy = function() {
        var svg = document.querySelector('#technologies-chart svg');
        if (!svg) {
            return;
        }
        document.querySelector('#technologies-chart').removeChild(svg);
    };

    win.TECH = TECH;

}(this, this.document, this.d3));
