using AutoHead_Server.Models;
using AutoHead_Server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AutoHead_Server.Controllers
{
    [RoutePrefix("api/vehicles")]
    public class AutoHeadController : ApiController
    {
        readonly VehicleService vehicleService;

        public AutoHeadController()
        {
            vehicleService = new VehicleService();
        }

        [HttpGet, Route]
        public HttpResponseMessage ReadAll()
        {
            List<Vehicle> vehicles = vehicleService.ReadAll();
            return Request.CreateResponse(HttpStatusCode.OK, vehicles);
        }

    }
}
