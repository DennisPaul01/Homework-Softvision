import IdentityCard from "../IdentityCard";

const Exercitiu2 = () => {
  // Identity Card este o componenta care contine numele nostru si alte detalii, scopul acesteia fiind de arata toggle effect

  return (
    <div className="box-exercitiu">
      <div className="box-title">
        <h5>Exercitiu 2</h5>
        <p>ID for drinks</p>
      </div>
      <IdentityCard></IdentityCard>
    </div>
  );
};
export default Exercitiu2;
