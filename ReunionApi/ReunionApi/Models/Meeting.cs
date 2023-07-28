namespace ReunionApi.Models
{
    public class Meeting
    {
        public Guid Id { get; set; }
        public string Theme { get; set; } = null!;
        public DateTime Date { get; set; }
        public User Creator { get; set; } = null!;
        public User[] Members { get; set; } = null!;

    }
}
