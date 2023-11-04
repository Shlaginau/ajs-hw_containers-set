import Character from '../character';
import Team from '../team';

describe('Team', () => {
  test('should add a character to the team', () => {
    const team = new Team();
    const character = new Character('A');
    team.add(character);
    expect(team.toArray()).toEqual([character]);
  });

  test('should not add the same character multiple times', () => {
    const team = new Team();
    const character = new Character('B');
    team.add(character);

    expect(() => {
      team.add(character);
    }).toThrowError();

    expect(team.toArray()).toEqual([character]);
  });

  it('should add all characters to the team', () => {
    const team = new Team();
    const character1 = new Character('C');
    const character2 = new Character('D');
    team.addAll(character1, character2);
    expect(team.toArray()).toEqual([character1, character2]);
  });
});
