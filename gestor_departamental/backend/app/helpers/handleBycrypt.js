import bcrypt from "bcryptjs";

const encrypt = async (text) => {
    const hash = await bcrypt.hash(text, 15)
    return hash;
}

const compare = async (text, hashedText) => {
    return bcrypt.compare(text, hashedText)
}