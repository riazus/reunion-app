using Microsoft.EntityFrameworkCore;
using Reunion.Api.Models.User;

namespace Reunion.Api.Data
{
    public class ReunionDbContext : DbContext
    {
        public ReunionDbContext(DbContextOptions<ReunionDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
