import Cards from './Cards'
import {useEffect, useState} from 'react'

interface ContactList {
  name: string;
  email: string;
  // Add other contact properties here
}

interface FilterList {
  name: string;
  email: string;
  // Add other contact properties here
}

const baseUrl = 'https://61c32f169cfb8f0017a3e9f4.mockapi.io'
const getUrl, postUrl = ` ${baseUrl}/api/v1/contacts`
const putUrl, deleteUrl = ` ${baseUrl}/api/v1/contacts/:id`

const App: React.FC = () => {

  const [contactList, setContactList] = useState<ContactList[]>([]);
  const [filterQuery, setFilterQuery] = useState<FilterList[]>([]);

  useEffect(() => {
    // Define an async function to fetch contact data
    const fetchData = async () => {
      try {
        const response = await fetch(getUrl);
        if (response.ok) {
          const data = await response.json();
          setContactList(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={"bg-gray-100"}>
      <section>
        <form>
          <input
            type={"text"}
            placeholder={"type here to filter..."}
            onChange={event => setFilterQuery(event.target.value)}
            className={"ml-20 mt-6 rounded-md p-2"}
          />
        </form>
      </section>
      <section className={"grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20"}>
        {contactList?.length < 1 && (
          <h1>No data matches your search</h1>
        )}
        <Cards contactList={contactList}/>
      </section>
    </div>
  )
}

export default App