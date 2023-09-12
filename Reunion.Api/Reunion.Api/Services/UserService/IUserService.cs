using Reunion.Api.Models.User;

namespace Reunion.Api.Services.UserService
{
    public interface IUserService
    {
        Task<List<User>?> GetAll();
        Task<User?> GetById(Guid userId);
        Task<User> AddUser(UserDTO newUser);
        Task UpdateUser(User userUpdateInfo);
        Task DeleteUser(User user);
    }
}
