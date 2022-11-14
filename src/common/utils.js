export const CONTENTS = [
  {
    name: 'Users List',
    type: 'users',
  },
  {
    name: 'Photos',
    type: 'photos',
  },
];

export const VALID_USER = {
  email: 'test@test.com',
  password: 'test@test',
};

export const FIELD_VALIDATIONS = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  password: /^(?=.*?[A-Za-z])(?=.*?[#?!@$%^&*-]).{8,}$/,
};
