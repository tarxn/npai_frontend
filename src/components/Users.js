import React, { useState, useEffect } from 'react';
import { Avatar, Table, Group, Text, ActionIcon, Menu, rem, Pagination } from '@mantine/core';
import {
  IconPencil,
  IconMessages,
  IconNote,
  IconReportAnalytics,
  IconTrash,
  IconDots,
} from '@tabler/icons-react';
import { Navbar } from "./Navbar/Navbar";
import '../App.css'; 



export default function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://reqres.in/api/users?page=${currentPage}`);
        const data = await response.json();
        setUsers(data.data);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const rows = users.map((user) => (
    <Table.Tr key={user.id}>
      <Table.Td>
        <Text fz="sm">{user.id}</Text>
      </Table.Td>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={40} src={user.avatar} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {user.first_name + ' ' + user.last_name}
            </Text>
          </div>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{user.email}</Text>
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="gray">
            <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </ActionIcon>
          <Menu
            transitionProps={{ transition: 'pop' }}
            withArrow
            position="bottom-end"
            withinPortal
          >
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <IconDots style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                leftSection={
                  <IconMessages style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
              >
                Send message
              </Menu.Item>
              <Menu.Item
                leftSection={<IconNote style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
              >
                Add note
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconReportAnalytics style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                }
              >
                Analytics
              </Menu.Item>
              <Menu.Item
                leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                color="red"
              >
                Terminate contract
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="app-container">
      <div className="navbar">
        <Navbar id='Users'/>
      </div>
      <div className="main-content d-flex">
      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="md">
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      <div className="footer">
      <Pagination
        total={totalPages}
        page={currentPage}
        onChange={setCurrentPage}
        color="blue"
        size="sm"
        siblings={1}
        boundaries={2}
        style={{ marginTop: 20, justifyContent: 'center' }}
      />
      </div>
      </div>

    </div>
    
  );
}
