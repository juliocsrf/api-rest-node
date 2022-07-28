import Student from '../models/Student';

class StudentController {
    async index(req, res) {
        const students = await Student.findAll({
            include: {
                association: 'photos',
                attributes: [
                    'fileName', 'fileOriginalName',
                ],
            },
        });
        res.json({ students });
    }

    async store(req, res) {
        try {
            const student = await Student.create(req.body);

            return res.json({ student });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Faltando ID'],
                });
            }

            const student = await Student.findByPk(id);

            if (!student) {
                return res.status(400).json({
                    errors: ['Aluno inválido'],
                });
            }

            return res.json({ student });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Faltando ID'],
                });
            }

            const student = await Student.findByPk(id);

            if (!student) {
                return res.status(400).json({
                    errors: ['Aluno inválido'],
                });
            }

            await student.destroy();

            return res.json({});
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Faltando ID'],
                });
            }

            const student = await Student.findByPk(id);

            if (!student) {
                return res.status(400).json({
                    errors: ['Aluno inválido'],
                });
            }

            const studentUpdated = await student.update(req.body);
            return res.json({ student: studentUpdated });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}

export default new StudentController();
