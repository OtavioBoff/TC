import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

interface Item {
  id: string;
  content: string;
}

const initialItems: Item[] = [
  { id: "1", content: "Item 1" },
  { id: "2", content: "Item 2" },
  { id: "3", content: "Item 3" },
];

const DraggableTable: React.FC = () => {
  const [items, setItems] = useState<Item[]>(initialItems);

  const onDragEnd = (result: DropResult) => {
    // Verifica se não houve destino para o drop
    if (!result.destination) return;

    // Reordena os itens
    const updatedItems = Array.from(items);
    const [removedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, removedItem);

    // Atualiza o estado com os itens ordenados
    setItems(updatedItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <table
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ width: "100%", borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th style={{ padding: "10px", border: "1px solid black" }}>
                  ID
                </th>
                <th style={{ padding: "10px", border: "1px solid black" }}>
                  Content
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <tr
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        userSelect: "none",
                        padding: 16,
                        margin: "0 0 8px 0",
                        minHeight: "50px",
                        backgroundColor:
                          index % 2 === 0 ? "#fafafa" : "#e2e2e2",
                        border: "1px solid black",
                        ...provided.draggableProps.style, // Certifique-se de passar o estilo do draggableProps
                      }}
                    >
                      <td style={{ padding: "10px" }}>{item.id}</td>
                      <td style={{ padding: "10px" }}>{item.content}</td>
                    </tr>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}{" "}
              {/* Garante que o espaço do item movido seja reservado */}
            </tbody>
          </table>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableTable;
