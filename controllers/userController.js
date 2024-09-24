import UserRepository from '../repositories/user.repository.js';

// Register a new user
export const signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserRepository.register({ name, email, password });
        res.status(201).send({ success: true, msg: 'User registered successfully', user });
    } catch (error) {
        next(error);
    }
};

// Login a user
export const signin = async (req, res, next) => {
    res.send("hello world")
    // try {
    //     const { email, password } = req.body;
    //     const { user, token } = await UserRepository.login({ email, password });
    //     res.cookie('token', token, { maxAge: 2 * 24 * 60 * 60 * 1000 });
    //     res.status(200).send({ success: true, msg: 'User logged in successfully', user, token });
    // } catch (error) {
    //     next(error);
    // }
};

// Logout a user by clearing the cookie
export const logout = (req, res, next) => {
    try {
        res.clearCookie('token');
        res.status(200).send({ success: true, msg: 'User logged out successfully' });
    } catch (error) {
        next(error);
    }
};


