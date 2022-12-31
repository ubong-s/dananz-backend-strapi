"use strict";

/**
 * project controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::project.project", ({ strapi }) => ({
  async findBySlug(ctx, next) {
    const { slug } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.db.query("api::project.project").findOne({
      where: { slug },

      populate: {
        project_header: {
          fields: [],
        },
        project_banner: {
          fields: [],
        },
        gallery: {
          fields: [],
        },
        seo: {
          fields: [],
        },
      },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
