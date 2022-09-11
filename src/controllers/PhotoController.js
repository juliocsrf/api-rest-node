import multer from 'multer';
import multerConfig from '../config/multer';
import Student from '../models/Student';
import Photo from '../models/Photo';

const upload = multer(multerConfig).single('file');

class PhotoController {
    async store(req, res) {
        return upload(req, res, async (err) => {
            const student = await Student.findByPk(req.body.studentId);

            if (err) {
                return res.status(400).json({
                    errors: [err.code],
                });
            }

            console.log(req.body);
            if (!student) {
                return res.status(400).json({
                    errors: ['Estudante inválido'],
                });
            }

            try {
                const photo = await Photo.create({
                    fileName: req.file.filename,
                    fileOriginalName: req.file.originalname,
                    studentId: req.body.studentId,
                });

                return res.json({ photo });
            } catch (e) {
                if (!e.errors) {
                    console.log(e.message);
                    return res.status(500).json({});
                }
                return res.status(400).json({
                    errors: e.errors.map((error) => error.message),
                });
            }
        });
    }
}

export default new PhotoController();
