using Microsoft.EntityFrameworkCore;
using ReunionApi.Models;

namespace ReunionApi.Data
{
    public class ReunionDbContext : DbContext
    {
        public ReunionDbContext(DbContextOptions<ReunionDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Meeting> Meeting { get; set; }
    }
}
