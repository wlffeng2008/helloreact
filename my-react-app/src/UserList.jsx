const users = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Levi', age: 45 },
    { id: 5, name: 'Jack', age: 41 },
    { id: 6, name: 'McDonald', age: 53 }
];
export function UserList() {
    return (
        <ul>
            {users.map(user => <li key={user.id}>
                {user.name} is {user.age} years old
            </li>
            )}
        </ul>
    );
}

export default function UserApp() {
  return <UserList />;
}