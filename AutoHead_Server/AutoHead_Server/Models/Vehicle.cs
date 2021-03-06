﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AutoHead_Server.Models
{
    public class Vehicle
    {
        public int VehicleId { get; set; }
        public int Year { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string VIN { get; set; }
        public string Trim { get; set; }
        public string Transmission { get; set; }
        public string Engine { get; set; }
        public string TireSize { get; set; }
        public int Mileage { get; set; }
    }
}