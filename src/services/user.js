let users = [];

// Fake fetch user
export async function fetchUsers() {
  return new Promise(resolve => setTimeout(() => resolve(users), 2000));
}

// Fake add user
export async function createUser(user) {
  return new Promise(resolve => {
    const newUser = {
      id: Date.now(),
      ...user
    };
    users = [...users, newUser];
    setTimeout(() => resolve(newUser), 2000);
  });
}

// Fake send email
export async function sendEmail({ id }) {
  return Promise.resolve(
    console.log(`An email has been sent to user id=[${id}]`)
  );
}
