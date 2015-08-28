(function(win, d3) {
    'use strict';

    var UX = {};

    UX.draw = function(width, height) {
        var w = width,
            h = height,
            g,
            link,
            root;

        var force = d3.layout.force()
            .on('tick', tick)
            .charge(function(d) {
                return d.name.length * -130;
            })
            .linkDistance(function(d) {
                var distance = (d.source.name.length + d.target.name.length) * 4;
                return distance;
            })
            .size([w, h - 160]);

        var vis = d3.select('#ux-chart').append('svg:svg')
            .attr('width', w)
            .attr('height', h);

        d3.json('lib/data/ux-table.json', function(json) {
            root = json;
            root.fixed = true;
            root.x = w / 2;
            root.y = h / 2 - 80;
            update();
        });

        function update() {
            var nodes = flatten(root),
                links = d3.layout.tree().links(nodes);

            // Restart the force layout.
            force
                .nodes(nodes)
                .links(links)
                .start();

            // Update the links…
            link = vis.selectAll('line.link')
                .data(links, function(d) {
                    return d.target.id;
                });

            // Enter any new links.
            link.enter().insert('svg:line', '.node')
                .attr('class', 'link')
                .attr('x1', function(d) {
                    return d.source.x;
                })
                .attr('y1', function(d) {
                    return d.source.y;
                })
                .attr('x2', function(d) {
                    return d.target.x;
                })
                .attr('y2', function(d) {
                    return d.target.y;
                });

            // Exit any old links.
            link.exit().remove();

            // Update the nodes…
            g = vis.selectAll('g')
                .data(nodes, function(d) {
                    return d.id;
                })
                .enter()
                .append('g');

            // Enter any new nodes.
            g.append('circle')
                .attr('r', function(d) {
                    var radius = (d.name.length * 7 + 15) / 2;
                    return radius;
                })
                .attr('class', 'node')
                .style('fill', color);

            g.append('text')
                .text(function(d) {
                    return d.name;
                })
                .style('display', function(d) {
                    // return (this.getComputedTextLength() > 2 * d.radius) ? 'none' : 'block';
                    return 'block';
                })
                .style('font-size', '14px')
                .attr({
                    'alignment-baseline': 'middle',
                    'text-anchor': 'middle'
                });

            g.call(force.drag);

        }

        function tick() {
            link.attr('x1', function(d) {
                return d.source.x;
            })
                .attr('y1', function(d) {
                    return d.source.y;
                })
                .attr('x2', function(d) {
                    return d.target.x;
                })
                .attr('y2', function(d) {
                    return d.target.y;
                });

            g.attr('transform', function(d) {
                return 'translate(' + d.x + ', ' + d.y + ')';
            });
        }

        // Color leaf nodes orange, and packages white or blue.
        function color(d) {
            return d._children ? '#3182bd' : d.children ? '#c6dbef' : '#fd8d3c';
        }

        // Returns a list of all nodes under the root.
        function flatten(root) {
            var nodes = [],
                i = 0;

            function recurse(node) {
                if (node.children) {
                    node.size = node.children.reduce(function(p, v) {
                        return p + recurse(v);
                    }, 0);
                }
                if (!node.id) {
                    node.id = ++i;
                }
                nodes.push(node);
                return node.size;
            }

            root.size = recurse(root);
            return nodes;
        }
    };

    UX.destroy = function() {
        var svg = document.querySelector('#ux-chart svg');
        if (!svg) {
            return;
        }
        document.querySelector('#ux-chart').removeChild(svg);
    };

    win.UX = UX;

}(this, this.d3));
