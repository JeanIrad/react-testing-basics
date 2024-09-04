import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("should render no user list when an array of users is empty", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/No users/i)).toBeInTheDocument();
  });

  it("should render  user list", () => {
    const users: User[] = [
      {
        id: 1,
        name: "Jean",
      },
      {
        id: 2,
        name: "Peter",
      },
    ];
    render(<UserList users={users} />);
    users.forEach((user) => {
      const link = screen.getByRole("link", {
        name: user.name,
      });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
