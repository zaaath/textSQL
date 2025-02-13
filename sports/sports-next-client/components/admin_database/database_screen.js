import { ClosableRow } from "../closable_row";
import { TableSelector } from "./table_selector";
import { TableColumnSelector } from "./column_selector";

const DatabaseScreen = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">Database</h1>
      <div className="flex flex-col space-y-10">
        <ClosableRow title="Table Selection">
          <TableSelector />
        </ClosableRow>
        <ClosableRow title="Column Selection">
          <TableColumnSelector />
        </ClosableRow>
      </div>
    </div>
  );
};

export default DatabaseScreen;
