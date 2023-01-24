const layoutConfig = require("./layoutConfig.json");

module.exports = {
  async rewrites() {
    return [
      ...layoutConfig.map(([domain, layout]) => {
        return {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: `.*${domain}.*`,
            },
          ],
          destination: `/${layout}/:path*`,
        };
      }),
      ...layoutConfig.map(([domain, layout]) => {
        return {
          source: "/",
          has: [
            {
              type: "host",
              value: `.*${domain}.*`,
            },
          ],
          destination: `/${layout}/`,
        };
      }),
    ];
  },
};
