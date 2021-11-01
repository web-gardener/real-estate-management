import {
  getProperties,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
  addImagesProperty,
} from "../controllers/properties.js";
import {
  getPropertiesOpts,
  getPropertyOpts,
  createPropertyOpts,
  updatePropertyOpts,
  deletePropertyOpts,
} from "./options/properties.js";

export const propertiesRoutes = function (fastify, opts, done) {
  fastify.get("/", getPropertiesOpts(getProperties));
  fastify.get("/:id", getPropertyOpts(getProperty));
  fastify.post("/", createPropertyOpts(createProperty));
  fastify.patch("/:id", updatePropertyOpts(updateProperty));
  fastify.delete("/:id", deletePropertyOpts(deleteProperty));
  fastify.post("/upload/images/:id", addImagesProperty);
  done();
};
