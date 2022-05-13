namespace APARTMENTS.DtosApartment
{
    public class UpdateApartmentDto
    {
        public int Id { get; set; }
        public string ApartmentDescription { get; set; }
        public int NumberOfRooms { get; set; }
        public int MonthlyPrice { get; set; }
    }
}
