function ShowStory(ID) {
    switch (ID) {
      case "1":
        return {title: "The Lion and the Mouse", content: "Once when a Lion was asleep,<br> a little Mouse began running up and down upon him;<br> this soon wakened the Lion,<br> who placed his huge paw upon him,<br> and opened his big jaws to swallow him. <br>“Pardon, O King,” cried the little Mouse: <br>“forgive me this time, I shall never forget it : who knows but what I may be able to do you a turn some of these days ?” <br>The Lion was so tickled at the idea of the Mouse being able to help him, <br>that he lifted up his paw and let him go. <br>Some time after the Lion was caught in a trap, <br>and the hunters who desired to carry him alive to the King, <br>tied him to a tree while they went in search of a wagon to carry him on. <br>Just then the little Mouse happened to pass by, <br>and seeing the sad plight in which the Lion was, <br>went up to him and soon gnawed away the ropes that bound the King of the Beasts. <br>“Was I not right?” said the little Mouse. <br>Little friends may prove great friends.<br><br>By La Fontaine"};
        break;
      case "2":
        return {title: "The Raven and the Fox", content: "Perch'd on a lofty oak, <br>Sir Raven held a lunch of cheese;<br>Sir Fox, who smelt it in the breeze,<br>Thus to the holder spoke:─<br>“Ha! how do you do, Sir Raven?<br>Well, your coat, sir, is a brave one!<br>So black and glossy, on my word, sir,<br>With voice to match, you were a bird, sir,<br>Well fit to be the Phoenix of these days.”<br>Sir Raven, overset with praise,<br>Must show how musical his croak.<br>Down fell the luncheon from the oak;<br>Which snatching up, Sir Fox thus spoke:─<br>“The flatterer, my good sir,<br>Aye liveth on his listener;<br>Which lesson, if you please,<br>Is doubtless worth the cheese.”<br>A bit too late, Sir Raven swore<br>The rogue should never cheat him more.<br><br>By La Fontaine"};
        break;
      case "3":
        return {title: "The Grasshopper and the Ant", content: "Cicada, having sung her song<br>All summer long,<br>Found herself without a crumb<br>When winter winds did come.<br>Not a scrap was there to find<br>Of fly or earthworm, any kind.<br>Hungry, she ran off to cry<br>To neighbor Ant, and specify:<br>Asking for a loan of grist,<br>A seed or two so she’d subsist<br>Just until the coming spring.<br>She said, “I’ll pay you everything<br>Before fall, my word as animal,<br>Interest and principal.”<br>Well, no hasty lender is the Ant;<br>It’s her finest virtue by a lot.<br>“And what did you do when it was hot?<br>She then asked this mendicant.<br>To all comers, night and day,<br>I sang. I hope you don’t mind.<br>You sang? Why, my joy is unconfined.<br>Now dance the winter away.”<br><br>By La Fontaine"};
        break;
      default: 
        return {title: "No story found", content: `Not found - Sorry`};
        break;
    }
  };
  module.exports = { ShowStory };