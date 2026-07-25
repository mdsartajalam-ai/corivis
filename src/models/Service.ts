import mongoose, { Schema, models } from "mongoose";

const ServiceSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Service = models.Service || mongoose.model("Service", ServiceSchema);

export default Service;