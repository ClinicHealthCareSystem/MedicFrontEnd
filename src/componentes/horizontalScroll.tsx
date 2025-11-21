import { ScrollView } from "react-native";
import CardCounts from "./cardCounts";

interface Card {
  id: string;
  titulo: string;
  valor: string;
}

interface HorizontalScrollProps {
  cards: Card[];
}

export default function HorizontalScroll({ cards }: HorizontalScrollProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    >
      {cards.map((card) => (
        <CardCounts key={card.id} titulo={card.titulo} valor={card.valor} />
      ))}
    </ScrollView>
  );
}
