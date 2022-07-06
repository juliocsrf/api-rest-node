import Student from '../models/Student';

class HomeController {
    async index(req, res) {
        const newStudent = await Student.create({
            name: 'Julio',
            lastName: 'Fonseca',
            email: 'juliocsrmf@gmail.com',
            age: 25,
            weight: 70,
            height: 1.60,
        });

        res.json({ newStudent });
    }
}

export default new HomeController();
