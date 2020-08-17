using System.Collections.Generic;
using System.Linq;
using Domain;
using Persistence;

namespace Api
{
    public class DataSeeder
    {
        public static void SeedValues(DataContext context)
        {
            if (!context.Values.Any())
            {
                //context.Database.Migrate();
                var countries = new List<Value>
                {
                    new Value { Name = "Afghanistan" },
                    new Value { Name = "Albania" },
                    new Value { Name = "Algeria" },
                    new Value { Name = "Andorra" },
                    new Value { Name = "Angola" },
                    new Value { Name = "Antigua and Barbuda" },
                    new Value { Name = "Argentina" },
                    new Value { Name = "Armenia" },
                    new Value { Name = "Aruba" },
                    new Value { Name = "Australia" },
                    new Value { Name = "Austria" },
                    new Value { Name = "Azerbaijan" },
                };
                context.AddRange(countries);
                context.SaveChanges();
            }
        }
    }
}