using Microsoft.AspNetCore.Mvc;
using Reunion.Api.Models.User;
using Reunion.Api.Services.UserService;

namespace Reunion.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<ActionResult<User>> AddUser(UserDTO user)
        {
            return await _userService.AddUser(user);
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAll()
        {
            var users = await _userService.GetAll();

            if (users == null || users.Count == 0)
            {
                return NotFound("Users not found");
            }

            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetById(string id)
        {
            if (!Guid.TryParse(id, out var userGuid))
            {
                return BadRequest("Invalid id");
            }

            var user = await _userService.GetById(userGuid);

            if (user == null)
            {
                return NotFound("User with specify id not found");
            }

            return Ok(user);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<User>> UpdateById(string id, User userInfo)
        {
            if (!Guid.TryParse(id, out var userGuid) || userGuid != userInfo.Id)
            {
                return BadRequest("Invalid id");
            }

            await _userService.UpdateUser(userInfo);

            return Ok(userInfo);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteById(string id)
        {
            if (!Guid.TryParse(id, out var userGuid))
            {
                return BadRequest("Invalid id");
            }

            User? user = await _userService.GetById(userGuid);

            if (user == null)
            {
                return NotFound("User with specify id not found");
            }

            await _userService.DeleteUser(user);

            return NoContent();
        }
    }
}
