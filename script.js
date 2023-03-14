<script>
  const form = document.querySelector('form');
  const consumptionInput = document.getElementById('consumption');
  const demandInput = document.getElementById('demand');
  const powerFactorInput = document.getElementById('powerFactor');
  const resultDiv = document.querySelector('.result');

  form.addEventListener('submit', function(event) 
    event.preventDefault();

    const consumption = parseFloat(consumptionInput.value);
    const demand = parseFloat(demandInput.value);
    const powerFactor = parseFloat(powerFactorInput.value);

    // calculate the electricity bill
    const energyCharge = consumption * 0.35;
    const demandCharge = demand * 5;
    const powerFactorCharge = (powerFactor = 0.9) ? (consumption * 0.03) : 0;
    const totalBill = energyCharge + demandCharge + powerFactorCharge;

    // display the result
    resultDiv.innerHTML = `
      <h2>Electricity Bill</h2>
      <p>The calculated electricity bill is:</p>
      <table>
        <tr>
          <th>Description</th>
          <th>Amount (RM)</th>
        </tr>
        <tr>
          <td>Energy Charge</td>
          <td>${energyCharge.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Demand Charge</td>
          <td>${demandCharge.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Power Factor Charge</td>
          <td>${powerFactorCharge.toFixed(2)}</td>
        </tr>
        <tr>
          <th>Total Bill</th>
          <th>${totalBill.toFixed(2)}</th>
        </tr>
      </table>
    `;
    resultDiv.style.display = 'block';
  );
</script>
