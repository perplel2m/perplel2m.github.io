$(document).ready(function() {
  $('.spirit').click(function(){
    var attack = $("input:radio[name=attack]:checked").val();
    if(isNaN(attack)){
      attack = 0;
    }
    var amplification = $("input:radio[name=amplification]:checked").val();
    if(isNaN(amplification)){
      amplification = 0;
    }
    var condition = $("input:radio[name=condition]:checked").val();
    if(isNaN(condition)){
      condition = 0;
    }
    var defense = $("input:radio[name=defense]:checked").val();
    if(isNaN(defense)){
      defense = 0;
    }
    var hit = $("input:radio[name=hit]:checked").val();
    if(isNaN(hit)){
      hit = 0;
    }
    var survive = $("input:radio[name=survive]:checked").val();
    if(isNaN(survive)){
      survive = 0;
    }

    attack = score(attack);
    amplification = score(amplification);
    condition = score(condition);
    defense = score(defense);
    hit = score(hit);
    survive = score(survive);

    function score(x){
      switch (x) {
        case "1":
          x = 7;
          break;
        case "2":
          x = 7+15;
          break;
        case "3":
          x = 7+15+26;
          break;
        case "4":
          x = 7+15+26+53;
          break;
        case "5":
          x = 7+15+26+53+90;
          break;
        case "6":
          x = 7+15+26+53+90+139;
          break;
        case "7":
          x = 7+15+26+53+90+139+201;
          break;
        case "8":
          x = 7+15+26+53+90+139+201+277;
          break;
        case "9":
          x = 7+15+26+53+90+139+201+277+368;
          break;
        case "10":
          x = 7+15+26+53+90+139+201+277+368+474;
          break;
        case "11":
          x = 7+15+26+53+90+139+201+277+368+474+590;
          break;
        case "12":
          x = 7+15+26+53+90+139+201+277+368+474+590+730;
          break;
        case "13":
          x = 7+15+26+53+90+139+201+277+368+474+590+730+880;
          break;
        case "14":
          x = 7+15+26+53+90+139+201+277+368+474+590+730+880+1060;
          break;
        case "15":
          x = 7+15+26+53+90+139+201+277+368+474+590+730+880+1060+1250;
          break;
        case "16":
          x = 7+15+26+53+90+139+201+277+368+474+590+730+880+1060+1250+1460;
          break;
        case "17":
          x = 7+15+26+53+90+139+201+277+368+474+590+730+880+1060+1250+1460+1690;
          break;
        case "18":
          x = 7+15+26+53+90+139+201+277+368+474+590+730+880+1060+1250+1460+1690+1940;
          break;
        case "19":
          x = 7+15+26+53+90+139+201+277+368+474+590+730+880+1060+1250+1460+1690+1940+2210;
          break;
        case "20":
          x = 7+15+26+53+90+139+201+277+368+474+590+730+880+1060+1250+1460+1690+1940+2210+2500;
          break;
        default:

          break;
      }
      return x;
    }

    var attack_v = 0;
    var amplification_v = 0;
    var condition_v = 0;
    var defense_v = 0;
    var hit_v = 0;
    var survive_v = 0;
    var sum_v = 0;

    $("input[name=attack_v]:checked").each(function() {
      var v = $(this).val();
      switch (v) {
        case "1":
          attack_v = attack_v+200;
          break;
        case "2":
          attack_v = attack_v+800;
          break;
        case "3":
          attack_v = attack_v+1800;
          break;
        case "4":
          attack_v = attack_v+3000;
          break;
        default:

          break;
      }
    });

    $("input[name=amplification_v]:checked").each(function() {
      var v = $(this).val();
      switch (v) {
        case "1":
          amplification_v = amplification_v+200;
          break;
        case "2":
          amplification_v = amplification_v+800;
          break;
        case "3":
          amplification_v = amplification_v+1800;
          break;
        case "4":
          amplification_v = amplification_v+3000;
          break;
        default:

          break;
      }
    });

    $("input[name=condition_v]:checked").each(function() {
      var v = $(this).val();
      switch (v) {
        case "1":
          condition_v = condition_v+200;
          break;
        case "2":
          condition_v = condition_v+800;
          break;
        case "3":
          condition_v = condition_v+1800;
          break;
        case "4":
          condition_v = condition_v+3000;
          break;
        default:

          break;
      }
    });

    $("input[name=defense_v]:checked").each(function() {
      var v = $(this).val();
      switch (v) {
        case "1":
          defense_v = defense_v+200;
          break;
        case "2":
          defense_v = defense_v+800;
          break;
        case "3":
          defense_v = defense_v+1800;
          break;
        case "4":
          defense_v = defense_v+3000;
          break;
        default:

          break;
      }
    });

    $("input[name=hit_v]:checked").each(function() {
      var v = $(this).val();
      switch (v) {
        case "1":
          hit_v = hit_v+200;
          break;
        case "2":
          hit_v = hit_v+800;
          break;
        case "3":
          hit_v = hit_v+1800;
          break;
        case "4":
          hit_v = hit_v+3000;
          break;
        default:

          break;
      }
    });

    $("input[name=survive_v]:checked").each(function() {
      var v = $(this).val();
      switch (v) {
        case "1":
          survive_v = survive_v+200;
          break;
        case "2":
          survive_v = survive_v+800;
          break;
        case "3":
          survive_v = survive_v+1800;
          break;
        case "4":
          survive_v = survive_v+3000;
          break;
        default:

          break;
      }
    });


    $('.attack_score').text(attack+attack_v);
    $('.amplification_score').text(amplification+amplification_v);
    $('.condition_score').text(condition+condition_v);
    $('.defense_score').text(defense+defense_v);
    $('.hit_score').text(hit+hit_v);
    $('.survive_score').text(survive+survive_v);
    $('.sum_score').text(attack+amplification+condition+defense+hit+survive+attack_v+amplification_v+condition_v+defense_v+hit_v+survive_v);

  });


});
