import "./App.css";

import misery from "./assets/misery-img.jpg";
import holly from "./assets/holly-img.jpg";
import estacoes from "./assets/estacoes-img.jpg";
import naoPisgue from "./assets/nao-pisque-img.jpg";

function App() {
const books = [
{
id: 1,
title: "Misery: Louca obsessão",
stock: 10,
desc: "Paul Sheldon é um escritor famoso, reconhecido por uma série de best-sellers protagonizados pela mesma personagem: Misery Chastain. Annie Wilkes é uma enfermeira aposentada, leitora voraz e obcecada pela história de Misery. Quando Paul sofre um acidente de carro em uma nevasca, ele é resgatado justamente por Annie, e esse encontro entre fã e autor é o ponto de partida de uma das tramas mais aterrorizantes de Stephen King.Insatisfeita com o final do último livro da série, a fã isola o autor debilitado em um quarto em sua casa. Com torturas, ameaças e uma vigilância persistente, ela faz de tudo para obrigá-lo a reescrever a narrativa com o final que ela considera apropriado. Considerada uma das vilãs mais assustadoras e complexas do universo King e interpretada por Kathy Bates no filme que se tornou um clássico, Annie Wilkes é a figura que faz de Misery um livro essencial.",
img: misery
},
{
id: 2,
title: "Não pisque",
stock: 5,
desc: "Em mais um romance protagonizado por Holly Gibney, Stephen King retorna com uma história que entremeia duas linhas narrativas: a primeira sobre um assassino em busca de vingança, e a segunda sobre um justiceiro cujo alvo é uma celebridade feminista.Izzy Jaynes é uma investigadora experiente de Buckeye City que, ainda lidando com traumas de ocorrências pregressas, depara-se com uma carta contendo uma grave ameaça: em breve, o texto alerta, pessoas inocentes serão assassinadas. Buscando desvendar o caso e descobrir quem está por trás disso, ela recorre à detetive e amiga Holly Gibney. Em pouco tempo, no entanto, a ameaça se torna real: uma mulher é morta de forma aleatória num parque de subúrbio, e elas têm de correr para que o assassino não execute outras pessoas.",
img: naoPisgue
},
{
id: 3,
title: "Holly",
stock: 8,
desc: "Penny Dahl está desesperada para encontrar a filha, Bonnie, que sumiu sem deixar vestígios. Em busca de ajuda profissional, ela liga para a agência Achados e Perdidos, sob o comando de Holly Gibney. A detetive reluta em aceitar o caso, porque deveria estar de licença, mas algo na voz de Penny faz com que Holly não consiga ignorar o pedido.A poucos quarteirões de onde Bonnie foi vista pela última vez, moram Rodney e Emily Harris. Um casal de acadêmicos octogenários, dedicados um ao outro, eles simbolizam a banalidade da classe média suburbana. No entanto, no porão de sua casa bem cuidada e repleta de livros, os dois escondem um segredo terrível, que pode estar relacionado ao desaparecimento de Bonnie.",
img: holly
},
{
id: 4,
title: "Quatro estações",
stock: 6,
desc: "Publicado originalmente em 1983, Quatro estações revela outra faceta do mestre do terror; aventurando-se pelo drama e pelo suspense, Stephen King entrega quatro novelas inspiradoras ligadas pela mudança das estações, narrando jornadas de diferentes personagens sob diferentes momentos da vida.Começando pela primavera, King parte da condenação de um homem à prisão perpétua para falar sobre o desejo de liberdade. A adaptação para o cinema, com atuações de Tim Robbins e Morgan Freeman, tornou-se um clássico chamado Um sonho de liberdade . E então vem o verão, com uma história sobre a relação entre um menino viciado em histórias da Segunda Guerra Mundial e um velho com um passado nazista. Essa foi transformada no filme O aprendiz , dirigido por Bryan Singer.Em seguida, no outono, King fala sobre a passagem da juventude para a maturidade a partir da história de um grupo de adolescentes que se vêem diante de um cadáver. A adaptação também se tornou um filme clássico: Conta comigo . Finalmente, chega o inverno, e com ele um conto de natal sobre um médico que ensina técnicas de respiração a uma mulher grávida, sem imaginar o tamanho do impacto que isso terá na vida dela. E, por último, um posfácio, onde King se despede: Me apaixonei por cada uma dessas histórias, e acho que alguma parte de mim sempre estará apaixonada. Espero que tenha gostado, leitor; que tenham lhe feito o que uma boa história deve fazer ― fazê-lo esquecer de suas preocupações e levá-lo a um lugar aonde nunca foi. É a mágica mais gostosa que conheço.",
img: estacoes
}
];

return ( <div className="container">
{books.map((book) => ( <div className="card" key={book.id}> <img src={book.img} alt={book.title} />

```
      <div className="content">
        <h2>Book {book.title}</h2>
        <p>{book.desc}</p>
        <p>
          <strong>Quantidade de exemplares:</strong> {book.stock} unidades
        </p>
        <button>Comprar agora</button>
      </div>
    </div>
  ))}
</div>


);
}

export default App;
