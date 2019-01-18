using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using AutoHead_Server.Models;

namespace AutoHead_Server.Services
{
    public class VehicleService
    {
        string connString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;

        public List<Vehicle> ReadAll()
        {
            using (SqlConnection conn = new SqlConnection(connString))
            {
                conn.Open();
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Vehicle_ReadAll";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                List<Vehicle> vehicle = new List<Vehicle>();

                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Vehicle vehicleData = new Vehicle()
                        {
                            VehicleId = (int)reader["vehicleId"],
                            Year = (int)reader["Year"],
                            Make = (string)reader["Make"],
                            Model = (string)reader["Model"],
                            VIN = (string)reader["VIN"],
                            Trim = (string)reader["Trim"],
                            Transmission = (string)reader["Transmission"],
                            Engine = (string)reader["Engine"],
                            TireSize = (string)reader["TireSize"],
                            Mileage = (int)reader["Mileage"]
                        };
                        vehicle.Add(vehicleData);
                    }                   
                }
                return vehicle;
            }  
        }

        public Vehicle Update(Vehicle vehicle) {

            using (SqlConnection conn = new SqlConnection(connString))
            {
                conn.Open();
                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Vehicle_Update";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                Vehicle vehicleUpdate = new Vehicle();
                using (SqlParameterCollection update = cmd.ExecuteNonQuery())
                {
                    
                        
                }
                return vehicleUpdate;
            }
        }
    }
}