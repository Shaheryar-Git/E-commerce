import bcrypt from "bcrypt";

const comparePassword = async (password, hashPassword ) => {
  const comparedPassword = await bcrypt.compare(password, hashPassword );
  return comparedPassword;
};

export default comparePassword;
