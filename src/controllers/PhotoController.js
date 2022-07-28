class PhotoController {
    async store(req, res) {
        res.json({
            success: true,
        });
    }
}

export default new PhotoController();
