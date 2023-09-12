using Microsoft.EntityFrameworkCore;
using Reunion.Api.Data;
using Reunion.Api.Services.UserService;

namespace Reunion;

class Program
{
    public static async Task Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
        builder.Services.AddDbContext<ReunionDbContext>(options =>
            options.UseSqlServer(connectionString));

        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        //builder.Services.AddSwaggerGen();
        builder.Services.AddScoped<IUserService, UserService>();

        var app = builder.Build();

        if (app.Environment.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
            /*app.UseSwagger();
            app.UseSwaggerUI();*/
        }

        app.UseCors(policy => policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
        app.UseAuthorization();
        app.MapControllers();

        app.Run();
    }
}