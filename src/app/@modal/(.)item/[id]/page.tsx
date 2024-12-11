import { Item } from "@/components/item";
import { Modal } from "./modal";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Modal>
      <Item id={id} />
    </Modal>
  );
}
