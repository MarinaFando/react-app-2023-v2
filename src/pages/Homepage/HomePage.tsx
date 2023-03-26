import React from 'react';
import SearchPanel from '../../components/SearchPanel';
import { Sneaker } from '../../App';
import CardList from '../../components/CardList/CardList';

interface HomePageProps {
  items: Sneaker[];
}
interface HomePageState {
  searchValue: string;
}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
    };
    this.onSearchValueChange = this.onSearchValueChange.bind(this);
  }

  onSearchValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      searchValue: event.target.value,
    });
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  render() {
    return (
      <section>
        <SearchPanel
          searchValue={this.state.searchValue}
          onSearchValueChange={this.onSearchValueChange}
        />
        <CardList items={this.props.items} searchValue={this.state.searchValue} />
      </section>
    );
  }
}

export default HomePage;
