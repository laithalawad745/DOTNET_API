using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ZEPE.Controllers.API
{
    [ApiController]
    [Route("api/[controller]")]
    public class APIconteroller : ControllerBase
    {
        [HttpGet]
        public ActionResult Get(){
            return Ok("hello");
        }
    }
}