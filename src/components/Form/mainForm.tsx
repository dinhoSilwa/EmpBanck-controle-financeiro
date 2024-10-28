export const Form = () => {
  return (
    <form action="">
      <input type="text" placeholder="titulo" />
      <input type="text" placeholder="valor" />
      <select id="categoria">
        <option value="01"> categoria 01</option>
        <option value="02"> categoria 02</option>
        <option value="03"> categoria 02</option>
      </select>

      <label htmlFor="financialInput">Entrada</label>
      <input type="radio" name="moneyType" id="financialInput" />

      <label htmlFor="financialExit">sáida</label>
      <input type="radio" name="moneyType" id="financialExit" />
    </form>
  );
};
