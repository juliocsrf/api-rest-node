class HomeController {
    index(req, res) {
        res.json({
            success: true,
        });
    }
}

export default new HomeController();
