var enemy = 100;
var my_hp = 100;
var count = 0;
var attack;
var my_attack;


document.getElementById('form').onsubmit = function() {
  var username = document.getElementById('form').username.value;
  if (username.length > 0) {
    var tmp = document.getElementById('output').textContent;
    var size = tmp.length;
    if (size === 0) {
      if (my_hp > 0 && enemy > 0) {
        var h1 = document.createElement('h1');
        h1.textContent = username;
        document.getElementById('output').appendChild(h1);
        var h1 = document.createElement('h1');
        h1.textContent = 'プロンティくん';
        document.getElementById('output').appendChild(h1);
        var p = document.createElement('p');
        p.textContent = username + 'の体力はあと' + my_hp + 'だ';
        document.getElementById('output').appendChild(p);
        var p = document.createElement('p');
        p.textContent = 'プロンティくんの体力はあと' + enemy + 'だ';
        document.getElementById('output').appendChild(p);
      }

      while (my_hp > 0 && enemy > 0) {
        my_attack = Math.floor(Math.random() * 30)+1;
        var p = document.createElement('p');
        enemy -= my_attack;
        if (enemy > 0) {
          p.textContent = username + 'の攻撃！プロンティくんに' + my_attack + 'のダメージ！プロンティくんの体力はあと' + enemy + 'だ';
        } else {
          p.textContent = username + 'の攻撃！プロンティくんに' + my_attack + 'のダメージ!プロンティくんの体力は0だ '
        }//if文終わり
        document.getElementById('output').appendChild(p);

        if (enemy > 0) {
          attack = Math.floor(Math.random() * 30)+1;
          var q = document.createElement('p');
          my_hp -= attack;
          if (my_hp > 0) {
            q.textContent = 'プロンティくんの攻撃！' + username +　'に' + attack + 'のダメージ！' + username + 'の体力はあと' + my_hp + 'だ';
          } else {
            q.textContent = 'プロンティくんの攻撃！' + username +　'に' + attack + 'のダメージ！' + username + 'の体力は0だ';
          }
          document.getElementById('output').appendChild(q);
        }

        count++;
      }

      if (enemy <= 0) {
        var p = document.createElement('p');
        p.textContent = count + '回の攻撃でプロンティくんを倒した！' + username + 'の勝ちだ！おめでとう！';
        document.getElementById('output').appendChild(p);
      } else if (my_hp <= 0) {
        var p = document.createElement('p');
        p.textContent = count + '回の攻撃でプロンティくんに倒された！' + username + 'の負けだ…　また挑戦しよう！';
        document.getElementById('output').appendChild(p);
      }
    }
    return false;
  } else {
    window.alert('名前を入力してください。');
    return false;
  }
}
