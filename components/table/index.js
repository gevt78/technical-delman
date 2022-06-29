import React from 'react'
import { observer } from 'mobx-react'

import { Table } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'

const CustomTable = ({ data, cell }) => {
  const {
    Cell,
    Column,
    HeaderCell,
  } = Table

  return (
    <div>
      {data && (
      <Table
        virtualized
        height={700}
        data={data}
        width="88vw"
        cellBordered
        style={{ borderColor: '#D0D6DC' }}
        hover={false}
      >
        {cell.map((item) => (
          <Column
            key={item}
            width={150}
            resizable
          >
            <HeaderCell
              style={{
                backgroundColor: '#F6F7FA',
                color: '#000',
                fontWeight: 600,
                fontSize: 'md',
              }}
            >
              {item}
            </HeaderCell>
            <Cell dataKey={item} />
          </Column>
        ))}
      </Table>
      )}
    </div>
  )
}

export default observer(CustomTable)
