import mongoose, { Schema } from 'mongoose'


const BlogsSchema = new Schema(
    {
        blogTitle: { type: String, required: true },
        introduction: { type: String, required: true },
        description: { type: String, required: true },
        imageUpload: { type: String, required: true }

    }, {
    timestamps: true
}
)





const BlogSchemaFinal = mongoose.models.Blog || mongoose.model('Blog', BlogsSchema)

export default BlogSchemaFinal
