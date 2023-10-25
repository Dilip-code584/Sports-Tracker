const teams = [
    {
      id: 1,
      name: 'India',
      info: 'India is a cricket powerhouse.',
      schedule: 'Next match: vs Pakistan on 30th October',
      pointsTable: 'Points: 16',
      matchResult: 'Last match result: India won',
    },
    {
      id: 2,
      name: 'Pakistan',
      info: 'Pakistan has a rich cricketing history.',
      schedule: 'Next match: vs India on 30th October',
      pointsTable: 'Points: 12',
      matchResult: 'Last match result: Pakistan lost',
    },
    {
      id: 3,
      name: 'England',
      info: 'England is known for its swing bowlers.',
      schedule: 'Next match: vs Australia on 1st November',
      pointsTable: 'Points: 14',
      matchResult: 'Last match result: England won',
    },
  ];
  
  const favorites = [];
  let selectedTeam = null;
  
  function renderTeams() {
    const favoriteTeamsList = document.getElementById('favoriteTeams');
    favoriteTeamsList.innerHTML = '';
  
    favorites.forEach((team) => {
      const li = document.createElement('li');
      li.textContent = team.name;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove from Favorites';
      removeButton.addEventListener('click', () => removeFromFavorites(team));
      li.appendChild(removeButton);
      favoriteTeamsList.appendChild(li);
    });
  
    const allTeamsList = document.getElementById('allTeams');
    allTeamsList.innerHTML = '';
  
    teams.forEach((team) => {
      const li = document.createElement('li');
      li.textContent = team.name;
      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Favorites';
      addButton.addEventListener('click', () => addToFavorites(team));
      li.appendChild(addButton);
      allTeamsList.appendChild(li);
    });
  }
  
  function addToFavorites(team) {
    if (!favorites.find((fav) => fav.id === team.id)) {
      favorites.push(team);
    }
    renderTeams();
  }
  
  function removeFromFavorites(team) {
    const index = favorites.findIndex((fav) => fav.id === team.id);
    if (index !== -1) {
      favorites.splice(index, 1);
    }
    renderTeams();
  }
  
  function viewTeamDetails(team) {
    selectedTeam = team;
    const teamInfo = document.getElementById('teamInfo');
    const teamSchedule = document.getElementById('teamSchedule');
    const teamPointsTable = document.getElementById('teamPointsTable');
    const teamMatchResult = document.getElementById('teamMatchResult');
  
    teamInfo.textContent = `Info: ${team.info}`;
    teamSchedule.textContent = `Schedule: ${team.schedule}`;
    teamPointsTable.textContent = `Points Table: ${team.pointsTable}`;
    teamMatchResult.textContent = `Match Result: ${team.matchResult}`;
  }
  
  // Initial rendering
  renderTeams();
  