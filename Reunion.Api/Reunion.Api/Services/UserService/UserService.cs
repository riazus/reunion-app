using Microsoft.EntityFrameworkCore;
using Reunion.Api.Data;
using Reunion.Api.Models.User;

namespace Reunion.Api.Services.UserService
{
    public class UserService : IUserService
    {
        private readonly ReunionDbContext _context;

        public UserService(ReunionDbContext context)
        {
            _context = context;
        }

        public async Task<User> AddUser(UserDTO userDTO)
        {
            User newUser = new User()
            {
                Id = Guid.NewGuid(),
                Name = userDTO.Name,
            };

            await _context.Users.AddAsync(newUser);
            await _context.SaveChangesAsync();

            return newUser;
        }

        public async Task<List<User>?> GetAll()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User?> GetById(Guid userId)
        {
            return await _context.Users.FindAsync(userId);
        }

        public async Task UpdateUser(User userUpdateInfo)
        {
            _context.Entry(userUpdateInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch
            {
                throw;
            }
        }

        public async Task DeleteUser(User user)
        {
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
        }
    }
}
