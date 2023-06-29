using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;

public class CorreiosController : ControllerBase
{
    private readonly HttpClient _httpClient;

    public CorreiosController(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    // Exemplo de método para obter informações de um CEP
    [HttpGet("cep/{cep}")]
    public async Task<IActionResult> GetCepInfo(string cep)
    {
        var response = await _httpClient.GetAsync($"https://viacep.com.br/ws/{cep}/json/");
        if (response.IsSuccessStatusCode)
        {
            var content = await response.Content.ReadAsStringAsync();
            return Ok(content);
        }

        return NotFound();
    }
}
