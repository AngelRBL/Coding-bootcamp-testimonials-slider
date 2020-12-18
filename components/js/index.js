function slide() {
  const TanyaImg = document.getElementById('tanyaImg');
  const Tanya = document.getElementById('tanya');
  const JohnImg = document.getElementById('johnImg');
  const John = document.getElementById('john');

  if (TanyaImg.style.display !== 'none' && Tanya.style.display !== 'none') {
    
    JohnImg.style.display = 'block';
    John.style.display = 'block';

    TanyaImg.style.display = 'none';
    Tanya.style.display = 'none';
  } else {

    JohnImg.style.display = 'none';
    John.style.display = 'none';

    TanyaImg.style.display = 'block';
    Tanya.style.display = 'block';
  }
}