export default function PruebaDark() {
  return (
    <div className="p-6 bg-red-200 dark:bg-green-500 text-black dark:text-white">
      Prueba de modo {document.documentElement.classList.contains('dark') ? 'Oscuro' : 'Claro'}
    </div>
  );
}
