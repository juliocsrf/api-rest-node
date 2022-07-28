import dotenv from 'dotenv';

dotenv.config();

class UrlHelper {
    makeUrl(path) {
        if (path.charAt(0) === '/') {
            path = path.substring(1);
        }

        return `${process.env.BASE_URL}/${path}`;
    }
}

export default new UrlHelper();
